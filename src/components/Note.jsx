<div className='np-displayer'>
            {json.map((note, index) => (
                <PreviewNote key={index} stickyColor={note.color} title={note.titulo}  content={note.contenido} date={note.fecha}/>
            ))}
            <PreviewNote />
        </div>