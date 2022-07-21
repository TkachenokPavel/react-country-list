import { BadgeLabel, Color } from "../types"

interface IProps {
    label: BadgeLabel;
    value: number;
    color: Color;
}

export const Badge = ({ color, value, label }: IProps) => {
    return (
        <div className={`badge bg-${color} col-2 p-2`}>{label}: {value}</div>
    )
}
