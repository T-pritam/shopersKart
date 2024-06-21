"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './car.css';

const Carousell = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<unknown[]>([]);
    const totalImages = 3; // Total unique images
    const visibleImages = 1; // Images visible at a time

    useEffect(() => {
        const carousel = carouselRef.current;
        const handleTransitionEnd = () => {
            if (currentIndex >= totalImages) {
                setCurrentIndex(0);
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(0%)`;
                carousel.offsetHeight; // Trigger reflow
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                }, 0);
            } else if (currentIndex < 0) {
                setCurrentIndex(totalImages - visibleImages);
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(${-((totalImages - visibleImages) * 100) / visibleImages}%)`;
                carousel.offsetHeight; // Trigger reflow
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                }, 0);
            }
        };

        carousel.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            carousel.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [currentIndex, totalImages, visibleImages]);

    const updateCarousel = (index) => {
        const offset = -index * 100;
        carouselRef.current.style.transform = `translateX(${offset}%)`;
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            updateCarousel(newIndex);
            return newIndex;
        });
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            updateCarousel(newIndex);
            return newIndex;
        });
    };

    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.carousel}>
            <button className={`${styles.carouselButton} ${styles.prev}`} onClick={handlePrevClick}>‹</button>
            <div className={styles.carouselImages} ref={carouselRef}>
                    <img
                        
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkA9gblpiJEJfpBwChxch8UVTI4VkPKpkSA&usqp=CAU'
                        alt='{`Image ${index + 1}`}'
                        className={styles.carouselImage}
                        onClick={() => handleImageClick('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkA9gblpiJEJfpBwChxch8UVTI4VkPKpkSA&usqp=CAU')}
                    />
                    <img
                        
                        src='data:image/jpeg;base64,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'
                        alt='{`Image ${index + 1}`}'
                        className={styles.carouselImage}
                        onClick={() => handleImageClick('data:image/jpeg;base64,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')}
                    />
                    <img
                        
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqZxO9zDdRixNKPoW7ssIMBkTWFQWza3H2g&usqp=CAU'
                        alt='{`Image ${index + 1}`}'
                        className={styles.carouselImage}
                        onClick={() => handleImageClick('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqZxO9zDdRixNKPoW7ssIMBkTWFQWza3H2g&usqp=CAU')}
                    />
                
            </div>
            <button className={`${styles.carouselButton} ${styles.next}`} onClick={handleNextClick}>›</button>

            {isModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                        <img src={currentImage} alt="Full View" className={styles.fullImage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carousell;
