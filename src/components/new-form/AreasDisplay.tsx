

export default function AreasDisplay({ areas, setAreas }: { areas: { items: Array<string> }, setAreas: Function }) {
    console.log(areas);
    console.log(areas.items);
    console.log("var", areas.items[0]);
    return (
        <>
            {areas.items.map((i, key) =>
            (
                <div key={key}>{i} - {key} Ahmet</div>
            )
            )}
        </>
    );
}