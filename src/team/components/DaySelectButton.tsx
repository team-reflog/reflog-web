import {Tag} from "@chakra-ui/react";
import React, {useState} from "react";

export interface DaySelectButtonProps {
    text: string,
    value: string,
    adder: (day: string) => void
    remover: (day: string) => void
}

export const DaySelectButton = ({text, value, adder, remover}: DaySelectButtonProps) => {

    const [selected, setSelected] = useState<boolean>(false);

    const onClick = () => {
        if (selected) {
            remover(value)
        } else {
            adder(value)
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