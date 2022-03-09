import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";

export function TextBox({ value, setValue }: { value: string, setValue: Function }) {
    return (
        <>
            <Form.Group controlId="formtextBox">
                <Form.Control
                    type="text"
                    placeholder="Type default value if you have any"
                    value={value}
                    onChange={(vl: any) => setValue(vl.target.value)} />
                <Form.Text className="text-muted">
                    If you type anything here. It will appear as default value.
                </Form.Text>
            </Form.Group>
        </>
    );
}


export function TextArea({ value, setValue }: { value: string, setValue: Function }) {
    const [row, setRow] = useState<number>(3);
    const setRowEvent = (val: number) => {
        if (val > 30) {
            setRow(30);
        }
        else if (val < 1) {
            setRow(3);
        }
        else {
            setRow(val);
        }

    }
    return (
        <>
            <Stack direction="horizontal" gap={3}>

                <div ><Form.Label>Area Height</Form.Label></div>
                <div ><InputGroup style={{ width: '9rem' }}>
                    <Button variant="outline-danger" style={{ width: '2.5rem' }} onClick={() => setRowEvent(row - 1)}>-</Button>
                    <FormControl
                        type="Number"
                        placeholder="Number of Column"
                        aria-label="Inputgroupnoc"
                        className="text-center"
                        value={row}
                        onChange={(vl: any) => setRowEvent(vl.target.value)}
                    />
                    <Button variant="outline-success" style={{ width: '2.5rem' }} onClick={() => row < 30 ? setRowEvent(row + 1) : null}>+</Button>
                </InputGroup>
                </div>
            </Stack>
            <Form.Group controlId="formtextBox">
                <Form.Label><h5></h5></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Type default value if you have any"
                    value={value}
                    onChange={(vl: any) => setValue(vl.target.value)}
                    rows={row}
                    as="textarea"
                    style={{ resize: 'none' }}
                />
                <Form.Text className="text-muted">
                    If you type anything here. It will appear as default value.
                </Form.Text>
            </Form.Group>
        </>
    );
}