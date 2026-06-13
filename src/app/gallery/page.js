'use client'
import React, { useState } from 'react'
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Eye, FolderOpen } from 'lucide-react'
import Link from 'next/link';

const galleryAlbums = [
  {
    folderName: "G01-Aatmnirbhar",
    heading: "Aatmanirbhar Programs (Self-Reliance Training)",
    description: "Self-reliance and employment-oriented skill enhancement workshops",
    photos: [
      { src: "/images/G01-Aatmnirbhar/img4.jpg", desc: "Photo 1" },
      { src: "/images/G01-Aatmnirbhar/img8.jpg", desc: "Photo 2" },
      { src: "/images/G01-Aatmnirbhar/img11.jpg", desc: "Photo 3" },
      { src: "/images/G01-Aatmnirbhar/img14.jpg", desc: "Photo 4" },
      { src: "/images/G01-Aatmnirbhar/img17.jpg", desc: "Photo 5" },
    ]
  },
  {
    folderName: "G05-Skill-Traiing-Programs",
    heading: "Skill-Training Program",
    description: "Vocational training and employment readiness initiative",
    photos: [
      { src: "/images/G05-Skill-Traiing-Programs/img4.jpg", desc: "Photo 1" },
      { src: "/images/G05-Skill-Traiing-Programs/img8.jpg", desc: "Photo 2" },
      { src: "/images/G05-Skill-Traiing-Programs/img11.jpg", desc: "Photo 3" },
      { src: "/images/G05-Skill-Traiing-Programs/img14.jpg", desc: "Photo 4" },
      { src: "/images/G05-Skill-Traiing-Programs/img17.jpg", desc: "Photo 5" },
      { src: "/images/G05-Skill-Traiing-Programs/img20.jpg", desc: "Photo 6" },
      { src: "/images/G05-Skill-Traiing-Programs/img23.jpg", desc: "Photo 7" },
      { src: "/images/G05-Skill-Traiing-Programs/img26.jpg", desc: "Photo 8" },
      { src: "/images/G05-Skill-Traiing-Programs/img29.jpg", desc: "Photo 9" },
      { src: "/images/G05-Skill-Traiing-Programs/img32.jpg", desc: "Photo 10" },
      { src: "/images/G05-Skill-Traiing-Programs/img35.jpg", desc: "Photo 11" },
      { src: "/images/G05-Skill-Traiing-Programs/img38.jpg", desc: "Photo 12" },
    ]
  },
  {
    folderName: "G02-General-awewrness",
    heading: "General Awareness Programs",
    description: "Social and educational public awareness campaigns",
    photos: [
      { src: "/images/G02-General-awewrness/img4.jpg", desc: "Photo 1" },
      { src: "/images/G02-General-awewrness/img8.jpg", desc: "Photo 2" },
      { src: "/images/G02-General-awewrness/img11.jpg", desc: "Photo 3" },
      { src: "/images/G02-General-awewrness/img14.jpg", desc: "Photo 4" },
      { src: "/images/G02-General-awewrness/img17.jpg", desc: "Photo 5" },
      { src: "/images/G02-General-awewrness/img20.jpg", desc: "Photo 6" },
      { src: "/images/G02-General-awewrness/img23.jpg", desc: "Photo 7" },
    ]
  },
  {
    folderName: "G03-relief-work-for-a-flood-affected-people",
    heading: "Flood Relief Work",
    description: "Distribution of relief and aid materials for flood-affected families",
    photos: [
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img4.jpg", desc: "Photo 1" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img8.jpg", desc: "Photo 2" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img11.jpg", desc: "Photo 3" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img14.jpg", desc: "Photo 4" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img17.jpg", desc: "Photo 5" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img20.jpg", desc: "Photo 6" },
    ]
  },
  {
    folderName: "G04-other-activities-of-precident-Mkt",
    heading: "President's Activities",
    description: "Social leadership and activities through Manav Kalyan Trust",
    photos: [
      { src: "/images/G04-other-activities-of-precident-Mkt/img4.jpg", desc: "Photo 1" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img8.jpg", desc: "Photo 2" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img11.jpg", desc: "Photo 3" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img14.jpg", desc: "Photo 4" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img17.jpg", desc: "Photo 5" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img20.jpg", desc: "Photo 6" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img23.jpg", desc: "Photo 7" },
    ]
  }
];

const Gallery_Page = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState({ open: false, src: '', index: 0, albumIndex: 0 });

  // Get flattened list of all photos for lightbox navigation when viewing 'all'
  const allPhotosFlattened = galleryAlbums.flatMap((album, albumIdx) =>
    album.photos.map((photo, photoIdx) => ({ ...photo, albumIndex: albumIdx, photoIndex: photoIdx }))
  );

  const openLightbox = (src, photoIdx, albumIdx) => {
    setLightbox({ open: true, src, index: photoIdx, albumIndex: albumIdx });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false });
  };

  const navigateLightbox = (direction) => {
    const album = galleryAlbums[lightbox.albumIndex];
    let nextIndex = lightbox.index + direction;

    if (nextIndex >= 0 && nextIndex < album.photos.length) {
      setLightbox({
        ...lightbox,
        src: album.photos[nextIndex].src,
        index: nextIndex
      });
    } else {
      // Loop albums if index exceeds bounds
      let nextAlbumIndex = lightbox.albumIndex + direction;
      if (nextAlbumIndex >= 0 && nextAlbumIndex < galleryAlbums.length) {
        const nextAlbum = galleryAlbums[nextAlbumIndex];
        const nextPhotoIndex = direction === 1 ? 0 : nextAlbum.photos.length - 1;
        setLightbox({
          open: true,
          src: nextAlbum.photos[nextPhotoIndex].src,
          albumIndex: nextAlbumIndex,
          index: nextPhotoIndex
        });
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative flex items-center justify-center px-4 py-20 bg-linear-to-br from-orange-50 to-red-50 border-b border-orange-100">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-100/50 backdrop-blur-xs">
            <ImageIcon className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold text-orange-700 tracking-wider">MKT GALLERY</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Our Activities &amp;
            <span className="bg-linear-to-r from-orange-600 via-red-500 to-darkred bg-clip-text text-transparent"> Moments</span>
          </h1>

          <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold">
            An overview of our various social welfare activities, training classes, and flood relief campaigns.
          </p>
        </div>
      </section>

      {/* Album Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-10 border-b border-slate-200 pb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition-all cursor-pointer ${activeTab === 'all'
              ? 'bg-linear-to-r from-orange-500 to-darkred text-white shadow-md'
              : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
              }`}
          >
            All Folders
          </button>
          {galleryAlbums.map((album, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(album.folderName)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition-all cursor-pointer ${activeTab === album.folderName
                ? 'bg-linear-to-r from-orange-500 to-darkred text-white shadow-md'
                : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {album.folderName}
            </button>
          ))}
        </div>

        {/* Albums Content */}
        <div className="space-y-16">
          {galleryAlbums.map((album, albumIdx) => {
            if (activeTab !== 'all' && activeTab !== album.folderName) return null;

            return (
              <div key={albumIdx} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xs">
                {/* Folder Header */}
                <div className="flex items-start gap-4 mb-6 md:mb-8 border-b border-slate-100 pb-5">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl flex-shrink-0 mt-0.5 border border-orange-100">
                    <FolderOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block text-xxs md:text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full mb-2">
                      Folder: {album.folderName}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                      {album.heading}
                    </h2>
                    {album.description && (
                      <p className="text-sm md:text-base text-slate-500 mt-1 font-semibold">
                        {album.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Grid of Photos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {album.photos.map((photo, photoIdx) => (
                    <div
                      key={photoIdx}
                      className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                      onClick={() => openLightbox(photo.src, photoIdx, albumIdx)}
                    >
                      <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 relative">
                        <Link href={photo.src}>
                          <img
                            src={photo.src}
                            alt={`${album.heading} - ${photo.desc}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            loading="lazy"
                          />
                        </Link>

                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="p-2 bg-white/90 rounded-full text-slate-900 shadow-md">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs md:text-sm text-slate-650 font-bold tracking-wider">
                          Description: {photo.desc}
                        </span>
                        <span className="text-xxs font-bold text-slate-400 capitalize px-2 py-0.5 bg-slate-100 rounded-md">
                          #{photoIdx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xs px-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => navigateLightbox(-1)}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
            <Link href={lightbox.src}>
              <img
                src={lightbox.src}
                alt="Preview"
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </Link>
            <div className="mt-4 text-center text-white">
              <p className="text-sm font-semibold tracking-wider text-slate-400">
                FOLDER: {galleryAlbums[lightbox.albumIndex].folderName}
              </p>
              <h3 className="text-lg font-bold mt-1">
                {galleryAlbums[lightbox.albumIndex].heading}
              </h3>
              <p className="text-sm text-orange-400 font-bold mt-1">
                Description: {galleryAlbums[lightbox.albumIndex].photos[lightbox.index].desc}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => navigateLightbox(1)}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery_Page