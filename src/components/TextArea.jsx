import { useEffect, useRef, useState } from 'react';
import { 
    ClassicEditor,
    DecoupledEditor,
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    Table,
    Undo,
    Context,
    ContextWatchdog ,
    Autosave 
  } from 'ckeditor5';
  import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
  import 'ckeditor5/ckeditor5.css';
//   import 'ckeditor5/ckeditor5-content.css';
//   import 'ckeditor5/ckeditor5-editor.css';




  export function TextArea ({handleContent, note={content: '<h1>This is a default Title!</h1><p>This is a default content</p>'}}) {
    console.log("Se carga TextArea");
    
    let saveData = (data) => {
        handleContent(data)
    }



    return (
    <CKEditorContext context={ Context } contextWatchdog={ ContextWatchdog }>
      <CKEditor
        editor={ ClassicEditor }
        config={ {
          toolbar: [
            'undo', 'redo', '|',
            'heading', '|', 'bold', 'italic', '|',
            'link', 'insertTable', 'mediaEmbed', '|',
            'bulletedList', 'numberedList', 'indent', 'outdent'
          ],
          plugins: [
            Bold,
            Essentials,
            Heading,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            MediaEmbed,
            Paragraph,
            Table,
            Undo,
            Autosave
          ],
          initialData: note.content,
          autosave: {
            save( editor ) {
                return saveData( editor.getData() );
            }
        },
        } }
        // data='<p>Hello fro the first editor working with the context!</p>'
        onReady={ ( editor ) => {

          // console.log( 'Editor 1 is ready to use!', editor );
        } }
      />
    </CKEditorContext>
    )
  }