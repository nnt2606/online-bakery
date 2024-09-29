import React from "react";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Formcake() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategories = searchParams.getAll("categorycake");
  const selectedCategorie = searchParams.getAll("categorydiscount");

  const categorycake = [
    { value: "cake1", title: "Bánh ngọt" },
    { value: "cake2", title: "Bánh mặn" },
    { value: "cake3", title: "Bánh mì" },
    { value: "cake4", title: "Bánh kem" },
  ];

  const listForm = categorycake.map((data, index) => (
    <Form.Check
      name="category"
      type="checkbox"
      checked={selectedCategories.includes(data.value)}
      value={data.value}
      label={data.title}
      key={index + 1}
      id={data.value}
    />
  ));

  const handleForm = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      searchParams.append("categorycake", value);
      setSearchParams(searchParams);
    } else {
      setSearchParams({
        categorydiscount: selectedCategorie,
        categorycake: selectedCategories.filter((item) => item !== value),
      });
    }
  };

  return <Form onChange={handleForm}>{listForm}</Form>;
}
