import { itemOfForm } from "./ItemofForm";


export default function AreasDisplay({ areas, setAreas }: { areas: { items: Array<itemOfForm> }, setAreas: Function }) {
    return (
        <>
            {areas.items.map((i, key) =>
            (
                <div key={key}>{i.type} - {i.value} - {i.options}</div>
            )
            )}
        </>
    );
}