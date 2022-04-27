export function LongTxt({text, isLongTxtShown}) {

    text = (!isLongTxtShown) ? text.slice(0, 100) + '...' : text
    
    return (
        <p className="desc">
            {text}
        </p>
    )
}