import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import type { Editor as EditorType } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';


interface props{
  aiOutput:string
}
function OutputSection({aiOutput}:props) {
  const editorRef:any= useRef<EditorType>(null);

  useEffect(() =>{

    const editorInstance=editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);

  }, [aiOutput])

  return (
    <div className="p-5 shadow-xl rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className='flex justify-between items-center p-5'>
        <h2 className=' font-bold text-2xl'> Your Result</h2>
        <Button>
          <Copy className='w-4 h-4 mr-2' /> Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your Content"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() => {
          const markdown = editorRef.current?.getInstance()?.getMarkdown();
          console.log(markdown);
        }}
      />
    </div>
  )
}

export default OutputSection
