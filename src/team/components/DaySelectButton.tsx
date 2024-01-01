import {Tag} from "@chakra-ui/react";
import React, {useState} from "react";

export interface DaySelectButtonProps {
    text: string,
    value: string,
    setCollection: React.Dispatch<React.SetStateAction<string[]>>
}

export const DaySelectButton = ({text, value, setCollection}: DaySelectButtonProps) => {

    const [selected, setSelected] = useState<boolean>(false);

    const onClick = () => {
        if (!selected) {
            setCollection(prev => [...prev, value]);
        } else {
            setCollection(prev => prev.filter(e => e !== value));
        }
        setSelected(prev => !prev);
    }

    return (
        <Tag
            onClick={onClick}
            draggable={false}
            bg={selected ? "teal.500" : "gray.100"}
            color={selected ? "white" : "black"}
            cursor={"pointer"}
            userSelect={"none"}
        >
            {text}
        </Tag>
    )
}