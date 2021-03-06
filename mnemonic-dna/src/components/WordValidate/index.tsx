import React, {useState} from "react";
import Highlighter from "react-highlight-words";
import ReactCodeInput from 'react-verification-code-input';
import "./style.scss"

type Props = {
    word: string;
    onComplete: () => void;
    prefix?: string
}

const WordPreview = ({word, onComplete, prefix}: Props) => {
    const [typedText, setTypedText] = useState("");

    const validateTypedText = (text: string) => {
        if (word.startsWith(text.toLowerCase())) {
            setTypedText(text)
        }

        if (word === text.toLowerCase()) {
            onComplete()
        }
    }

    return (
        <div className="container">
            <h1>
                {prefix} <Highlighter
                highlightClassName="highlight"
                searchWords={[typedText]}
                autoEscape={true}
                textToHighlight={word}
            />
            </h1>

            <ReactCodeInput
                key={word}
                className="input"
                type="text"
                onChange={(val => validateTypedText(val))}
                fields={word.length}
                fieldWidth={45}
                fieldHeight={45}
                // placeholder={word.split("")}
            />
        </div>)

}

export default WordPreview;
