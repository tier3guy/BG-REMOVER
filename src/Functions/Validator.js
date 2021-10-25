// File Validation
export const ValidateFile = (image) => {
  const AcceptableFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  const AcceptableFileSize = 20e6;
    
  // Validating file type
  if(AcceptableFileTypes.indexOf(image.type) === -1) return false;
  // validating file size
  else if(image.size > AcceptableFileSize) return false;

  return true;
}