

export default function AreasDisplay({ areas, setAreas }: { areas: { items: Array<string> }, setAreas: Function }) {
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