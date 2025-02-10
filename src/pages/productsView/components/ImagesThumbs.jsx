
export const Thumb = (props) => {
    const { selected, index, onClick, image } = props
  
    return (
            <button onClick={onClick} type="button" className="w-[100px] h-[100px] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image} className="w-full h-full object-cover" />
            </button>
    )
}