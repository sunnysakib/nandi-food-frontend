import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cn } from "@/lib/utils";

const Image = ({ height, width, src, alt, className, style }) => {
  return (
    <LazyLoadImage
      alt={alt || "img"}
      height={height}
      src={src}
      width={width}
      style={style}
      className={cn("object-contain", className)}
    />
  );
};

Image.propTypes = {
  height: PropTypes.number || PropTypes.string,
  width: PropTypes.number || PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
