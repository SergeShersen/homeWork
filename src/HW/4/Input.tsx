import { ChangeEvent } from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (text:string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({currentText,setCurrentText}: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const newText = event.currentTarget.value
		setCurrentText(newText)
	};

	return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
