// Collecting Image over drag and drop
export const CollectImage = (e) => {
  const Image = e.dataTransfer.files[0];
  return Image;
}