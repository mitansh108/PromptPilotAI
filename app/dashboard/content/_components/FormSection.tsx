"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";


interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({}); // ✅ initialized as object

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log("📥 Input Changed:", name, value); // ✅ debug input
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("🚀 Submit Clicked!");
    console.log("📦 Form Data:", formData);

    if (typeof userFormInput !== "function") {
      console.error("❌ userFormInput is not a function");
      return;
    }

    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-xl rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">

      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2>
      <p className="text-grey-500 text-md">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-10">
            <label className="font-bold text-xl">
              <h2>{item.label}</h2>
            </label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}

        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin mr-2" />} Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
