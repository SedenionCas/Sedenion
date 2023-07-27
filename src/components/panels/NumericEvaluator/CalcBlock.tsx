import styles from "./CalcBlock.module.css";

interface CompletedProps {
    expression: string;
    solution: number;
}

export default function CalcBlock({ expression, solution }: CompletedProps) {
    return (
        <div id={styles.container}>
            <p id={styles.expression}>{expression}</p>
            <p id={styles.solution}>{solution}</p>
        </div>
    );
}
