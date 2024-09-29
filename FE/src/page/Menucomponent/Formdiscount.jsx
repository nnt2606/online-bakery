import React from "react";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Formdiscount() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategorie = searchParams.getAll("categorydiscount");
  const selectedCategories = searchParams.getAll("categorycake");

  const categorydiscount = [
    {
      value: "discount",
      title: "Có khuyến mãi",
    },
    {
      value: "nodiscount",
      title: "Không khuyến mãi",
    },
  ];

  const listForm = categorydiscount.map((data, index) => (
    <Form.Check
      name="categoryd"
      type="checkbox"
      checked={selectedCategorie.includes(data.value)}
      value={data.value}
      label={data.title}
      key={index + 6}
      id={data.value}
    />
  ));

  const handleForm = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    if (checked) {
      searchParams.append("categorydiscount", value);
      setSearchParams(searchParams);
    } else {
      setSearchParams({
        categorycake: selectedCategories,
        categorydiscount: selectedCategorie.filter((item) => item !== value),
      });
    }
  };

  return <Form onChange={handleForm}>{listForm}</Form>;
}
