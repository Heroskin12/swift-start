import GridItem from "./GridItem";
export default function Grid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
}
