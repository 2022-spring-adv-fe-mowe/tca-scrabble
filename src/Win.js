import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export const Win = () => {

    const nav = useNavigate();

    return (
        <>
            <Button
             startIcon={<CloseIcon />}
             onClick={() => nav("/")}
             >
                 Exit
            </Button>
            <h2>
                Congrats! 🎉
            </h2>
            <p>
                <Button
                    variant="outlined"
                    onClick={() => nav("/playGame")}
                >
                    Play Again
                </Button>
            </p>

            {/* <p>
                <Button
                    variant="outlined"
                    onClick={() => nav("/")}
                >
                    Exit
                </Button>
            </p> */}


      </>
    );
};
