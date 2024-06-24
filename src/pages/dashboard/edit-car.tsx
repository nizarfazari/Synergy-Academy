
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function EditCar() {
    let { carId } = useParams();
    const navigate = useNavigate();
    const [formDatas, setFormDatas] = useState({
        name: "",
        category: "",
        price: "",
        size: null || "small",
        image_url: null,
        start_rent: "",
        finish_rent: ""
    });


    console.log()
    useEffect(() => {
        fetchCars();
    }, []); // Fetch data saat komponen dimuat pertama kali

    const fetchCars = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/cars/${carId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setFormDatas({
                name: data.name,
                category: data.category,
                price: data.price,
                size: data.size || "small", // Misalnya, jika size tidak tersedia dari data, default ke "small"
                image_url: null,
                start_rent: new Date(data.start_rent).toISOString().split('T')[0],
                finish_rent: new Date(data.finish_rent).toISOString().split('T')[0]
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error fetching data (misalnya menampilkan pesan error)
        }
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();


        const formData = new FormData()
        if (formDatas.image_url) {
            formData.append('image_url', formDatas.image_url!)
        }
        formData.append('size', formDatas.size!)
        formData.append('name', formDatas.name!)
        formData.append('price', formDatas.price!)
        formData.append('category', formDatas.category!)
        formData.append('start_rent', formDatas.start_rent!)
        formData.append('finish_rent', formDatas.finish_rent!)

        try {
            const localUser = localStorage.getItem('user');
            if (localUser) {
                const user = JSON.parse(localUser)

                const response = await fetch(`http://localhost:5000/api/v1/cars/${carId}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    },
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Failed get data');
                }
                navigate("/dashboard/list", { replace: true })
                const data = await response.json();




            }


        } catch (error: any) {
            console.error('data cant get:', error);

        }
    };

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        console.log(files)
        console.log(name)
        setFormDatas((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };



    return (
        <>
            <ul className="breadcrumb">
                <li><a href="#">Cars</a></li>
                <li ><a href="#" >List Cars</a></li>
                <li className="active"><a href="#" >Dashboard</a></li>
            </ul>

            <h1 className="heading-cars">Edit Cars</h1>

            <div className="p-4 bg-white rounded-[2px] mt-3">
                <Form onSubmit={handleSubmit} encType="">
                    <FormGroup row>
                        <Label for="name" sm={2}>Nama</Label>
                        <Col sm={10}>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter car name"
                                type="text"
                                value={formDatas.name}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="category" sm={2}>Kategori</Label>
                        <Col sm={10}>
                            <Input
                                id="category"
                                name="category"
                                placeholder="Enter car cateogry"
                                type="text"
                                value={formDatas.category}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="harga" sm={2}>Harga</Label>
                        <Col sm={10}>
                            <Input
                                id="harga"
                                name="price"
                                placeholder="Enter price"
                                type="text"
                                value={formDatas.price}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>
                            Select
                        </Label>
                        <Col sm={10}>

                            <Input
                                id="exampleSelect"
                                name="size"
                                type="select"
                                defaultValue={'small'}
                                onChange={handleChange}
                            >
                                <option value={'small'}>
                                    Small
                                </option>
                                <option value={"medium"}>
                                    Medium
                                </option>
                                <option value={"large"}>
                                    Large
                                </option>

                            </Input></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="file" sm={2}>File</Label>
                        <Col sm={10}>
                            <Input
                                id="file"
                                name="image_url"
                                type="file"
                                onChange={handleChange}
                            />
                            <FormText>File size max. 2MB</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="start_rent" sm={2}>Start Rent</Label>
                        <Col sm={10}>
                            <Input
                                id="start_rent"
                                name="start_rent"
                                type="date"
                                value={formDatas.start_rent}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="finish_rent" sm={2}>Finish Rent</Label>
                        <Col sm={10}>
                            <Input
                                id="finish_rent"
                                name="finish_rent"
                                type="date"
                                value={formDatas.finish_rent}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <button type="submit" className="py-2 w-full bg-[#0D28A6] text-white mt-4">Submit</button>
                </Form>
            </div>
        </>
    )
}