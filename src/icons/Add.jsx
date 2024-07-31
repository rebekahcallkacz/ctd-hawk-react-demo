const Add = ({height, width, fill}) => {
    return (
        <svg viewBox="0 0 24 24" height={height} width={width}>
            <path fill={fill} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
        </svg>
    )
};

export default Add;