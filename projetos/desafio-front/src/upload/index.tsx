import { useCallback, useState } from 'react';
import {Title, Container, Button} from './styles';
import axios from 'axios';


export const Upload = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState({ started: false, pc: 0});
    const [msg, setMsg] = useState('');

    const handleUpload = useCallback(() => {
        if(!file) {
            setMsg("selecione um arquivo");
            return;
        }

        const fd = new FormData();
        for (let i=0; i<file.length; i++) {

            fd.append(`file${i+1}`, file[i]);
        }

        setMsg("Loading...");
        setProgress(prevState => {
            return {...prevState, started: true}
        })
        axios.post('http://localhost:3000/upload', fd, {
            onUploadProgress: (progressEvent) => { setProgress(prevState => {
                return {...prevState, pc: progressEvent.progress*100}
            })},
            headers: {
                "Custom-header": "value",
            }
        })
        .then(res => {
            setMsg("Enviado com sucesso!")
            console.log(res.data);
        })
        .catch(err => {
            setMsg("Falha ao enviar")
            console.log(err);
        })
    },[file])

    return(
        <Container>
            <Title>Upload files</Title>
            <input style={{marginRight: "70px"}} onChange={(e) => {setFile(e.target.files[0])}} type="file" multiple/>
            <Button onClick={handleUpload}>Enviar</Button>

            {progress.started && <progress style={{width: "100%", marginTop: "15px"}} max="100" value={progress.pc}></progress>}
            {msg && <span style={{marginTop: "20px", color: msg !== "Enviado com sucesso!" ? "#ddd" : "green"}}>{msg}</span>}
        </Container>
    );
}