
import { Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function EditCar() {

    return (
        <>
            <ul className="breadcrumb">
                <li><a href="#">Cars</a></li>
                <li ><a href="#" >List Cars</a></li>
                <li className="active"><a href="#" >Dashboard</a></li>
            </ul>

            <h1 className="heading-cars">Edit Cars</h1>

            <div className="p-4 bg-white rounded-[2px] mt-3">
                <Form>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"
                            sm={2}
                        >
                            Nama
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleEmail"
                                name="nama"
                                placeholder="with a placeholder"
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"
                            sm={2}
                        >
                            Harga
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleEmail"
                                name="nama"
                                placeholder="with a placeholder"
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>
                            File
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleFile"
                                name="file"
                                type="file"
                            />
                            <FormText>
                                File size max. 2MB
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>
                            Start Rent
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleFile"
                                name="start_rent"
                                type="date"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>
                            Finish Rent
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleFile"
                                name="finish_rent"
                                type="date"
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}