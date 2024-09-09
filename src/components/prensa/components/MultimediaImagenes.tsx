interface GalleryItem {
  id: number;
  imageUrl: string;
  imageAlt: string;
  imagedescription: string;
}

interface MultimediaImagenesProps {
  gallery: GalleryItem[];
}

export const MultimediaImagenes: React.FC<MultimediaImagenesProps> = ({ gallery }) => {
  const getGridColumns = () => {
    switch (gallery.length) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      default:
        return 'grid-cols-3';
    }
  };

  return (
    <div data-aos="fade-up">
      {gallery && gallery.length > 0 && (
        <div className="mt-12 mb-20">
          <div
            className={`grid gap-4 ${getGridColumns()} sm:grid-cols-1 xs:grid-cols-1`}
          >
            {gallery.map((item) => (
              <div key={item.id} className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-[110%] object-cover"
                />
                <p className="text-sm mt-2 rounded-b-lg">
                  {item.imagedescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
