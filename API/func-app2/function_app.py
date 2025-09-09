import azure.functions as func
import logging
import json
import os
from openai import AzureOpenAI  # 用于调用 Azure OpenAI 服务

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

# 从环境变量中读取配置
endpoint = os.getenv("ENDPOINT_URL")
deployment_name = os.getenv("DEPLOYMENT_NAME")
api_key = os.getenv("AZURE_OPENAI_API_KEY")

# 初始化 AzureOpenAI 客户端
client = AzureOpenAI(
    api_key=api_key,
    api_version="2025-01-01-preview",
    azure_endpoint=endpoint,
    azure_deployment=deployment_name,
)

# 系统提示词
system_prompt = """Based on the user prompt - input (given subject, given total period, and given frequency), you give a list of encouraging sentences with timestamps. 
The sentences should be between 10 words and 30 words.
Example:
{Input: {"Subject": "[Learn a song by guitar]"}, Total period: [10] hours, Frequency: [30] minutes, Style: [Encouraging]}
{Output: 
  {["Welcome to the journey to learn a song by guitar!"], [00:00:00]}, 
  {["You have learned 30 minutes. A good start is the half of the success, keep going!"], [00:30:00]}, 
  {["You have learned 1 hour. You are doing great! Keep doing!"], [01:00:00]},
  {["You have learned 1 hour and 30 minutes. You are getting better and better!"], [01:30:00]}, 
  {["You have learned 2 hours. You are on the right track!"], [02:00:00]}, 
  {["You have learned 2 hours and 30 minutes. You are making progress!"], [02:30:00]}, 
  {["You have learned 3 hours. Keep up the good work!"], [03:00:00]}, 
  {["You have learned 3 hours and 30 minutes. You are doing amazing!"], [03:30:00]}, 
  {["You have learned 4 hours. You are getting closer to your goal!"], [04:00:00]}, 
  {["You have learned 4 hours and 30 minutes. You are almost there!"], [04:30:00]}, 
  {["You have learned 5 hours. You are doing fantastic!"], [05:00:00]}, 
  {["You have learned 5 hours and 30 minutes. You are making great progress!"], [05:30:00]}, 
  {["You have learned 6 hours. Keep pushing forward!"], [06:00:00]}, 
  {["You have learned 6 hours and 30 minutes. You are doing an excellent job!"], [06:30:00]}, 
  {["You have learned 7 hours. You are getting closer to your goal!"], [07:00:00]}, 
  {["You have learned 7 hours and 30 minutes. You are almost there!"], [07:30:00]}, 
  {["You have learned 8 hours. You are doing fantastic!"], [08:00:00]}, 
  {["You have learned 8 hours and 30 minutes. You are making great progress!"], [08:30:00]}, 
  {["You have learned 9 hours. Keep pushing forward!"], [09:00:00]}, 
  {["You have learned 9 hours and 30 minutes. You are doing an excellent job!"], [09:30:00]}, 
  {["You have learned a total of 10 hours! Congratulations!"], [10:00:00]}
}"""

@app.route(route="HttpExample", methods=["POST"])
def HttpExample(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Function triggered.")

    try:
        req_body = req.get_json()
        user_input_json = req_body.get("input", {})
    except ValueError as e:
        logging.error(f"Invalid JSON input: {e}")
        return func.HttpResponse("Invalid JSON input", status_code=400)

    try:
        response = client.chat.completions.create(
            model=deployment_name,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps(user_input_json)}
            ],
            # max_tokens=2000,
            # temperature=0.7,
            # top_p=0.95,
        )

        result = response.choices[0].message.content.strip()
        return func.HttpResponse(
            json.dumps({"response": result}, ensure_ascii=False),
            status_code=200,
            mimetype="application/json"
        )

    except Exception as e:
        logging.error(f"Error generating content: {e}")
        return func.HttpResponse(f"Error generating content: {str(e)}", status_code=500)
