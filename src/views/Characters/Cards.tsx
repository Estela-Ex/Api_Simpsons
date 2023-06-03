export type Props = {
  character: {
    Nombre: string;
    Historia: string;
    Genero: string;
    Estado: string;
    Ocupacion: string;
    Imagen: string;
    id: string;
  };
};

export default function Cards({ character }: Props) {
  return (
    <div className="card-container">
      <img src={character.Imagen} />
      <div className="card-info">
        <span><strong>Nombre:</strong>   {character.Nombre}</span>
        <span><strong>Historia:</strong> {character.Historia}</span>
        <span><strong>Genero:</strong> {character.Genero}</span>
        <span><strong>Estado:</strong> {character.Estado}</span>
        <span><strong>Ocupacion:</strong> {character.Ocupacion}</span>
      </div>
    </div>
  );
}
