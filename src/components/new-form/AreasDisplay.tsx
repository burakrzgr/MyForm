import { itemOfForm } from "./ItemofForm";


export default function AreasDisplay({ areas, setAreas }: { areas: { items: Array<itemOfForm> }, setAreas: Function }) {
    return (
        <>
            {areas.items.map((i, key) =>
            (
                <div key={key}>name: {i.name} - type: {i.type} - val : {i.value} - opt: {i.options} - disp: {i.displays ? i.displays.map(t => (t ? "true":"false")):"no"} - cnt : {i.count} </div>
            )
            )}
        </>
    );
}