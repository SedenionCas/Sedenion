type ErrorBlockProps = {
    content: string;
};

function ErrorBlock({ content }: ErrorBlockProps) {
    return (
        <div className="m-5 my-2 w-[calc(100%-2*1.25rem)] overflow-x-auto rounded-md border border-red-600 bg-red-600  bg-opacity-60 p-3 text-opacity-100">
            <p className="pl-1 text-lg text-truegray-50 whitespace-pre font-mono align-middle">{content}</p>
        </div>
    );
}

export default ErrorBlock;
