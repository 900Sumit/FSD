export default function Avatar({ person, size }) {
  return (
    <div>
      <h1>{person.name}</h1>
      <img 
        src=".//WhatsApp Imagejpeg.jpeg"        
        width={size}
        height={size}
      />
    </div>
  );
}