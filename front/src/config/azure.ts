export const azureConfig = {
  functionUrl: import.meta.env.VITE_AZURE_FUNCTION_URL || '',
  blobUrl: import.meta.env.VITE_AZURE_BLOB_URL || '',
  containerName: 'motivational-sentences'
};