const Gallery = () => {
    const data = [

    ]
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {data.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            id={recipe.id}
          />
        ))}
    </div>
  );
};

export default Gallery;
