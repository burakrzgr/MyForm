import { ButtonGroup, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const variants = ["danger", "warning", "success", "info","primary","secondary","system","dark"];
export default function VariantPicker({
  infoType,
  setInfoType,
}: {
  infoType: string;
  setInfoType: Function;
}) {

  const radioHandler = (event: any) => {
    setInfoType(event.target.value);
  };
  return (
    <>
      <ButtonGroup   className="pb-3" >
        {variants.map((x) => {
          return (
            <ToggleButton
              key={x}
              id={"my-chk-"+x}
              type="radio"
              variant={"outline-" + x}
              value={x}
              checked={x == infoType}
              onChange={radioHandler}
            >
              {x}
            </ToggleButton>
          );
        })}
      </ButtonGroup  >
    </>
  );
}
