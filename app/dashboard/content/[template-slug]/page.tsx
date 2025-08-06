"use client"
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/data/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModel'

interface PROPS{
  params:{
    'template-slug': string
  }
  
}

function CreateNewContent() {

  const params = useParams();
  const templateSlug = params['template-slug'] as string;
  const selectedTemplate = Templates?.find((item) => item.slug == templateSlug);
  const [loading, setLoading] = useState(false);


  const[aiOutput, setAiOutput] = useState<string>('');

  const GenerateAIContent=async(formData:any)=>{
    console.log("🔁 GenerateAIContent called", formData);
    setLoading(true);

    const SelectedPrompt=selectedTemplate?.aiPrompt;

    const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setAiOutput(result?.response.text());
    setLoading(false);

  }

  return (
    <div className='p-10 pb-5 mt-20'>

      <Link href={"/dashboard"}>
      <Button> <ArrowLeft></ArrowLeft> Back </Button>
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-6 '>
      {/*FORMS SECTION */}
      <FormSection 
  selectedTemplate={selectedTemplate}
  userFormInput={(v: any) => GenerateAIContent(v)}
  loading={loading}
/>


    <div className='col-span-2' >

    <OutputSection aiOutput={aiOutput}>

    </OutputSection>
    </div>
      
    </div>
    </div>
  )
}

export default CreateNewContent
