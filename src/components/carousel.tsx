import React, { useState } from 'react';
import './styles//carousel.css';
import Modal from './modal';
import DeleteIcon from "../assets/delete.png"

interface CarouselProps {
    items: { image: any; postId: any; }[];
    routes: {
        deleteRoute: string
    };
    deleteText: string
}

const Carousel: React.FC<CarouselProps> = ({ items , routes = {
    deleteRoute: "DeleteCandidatePosts"
}, deleteText = "do you want to delete this post?" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    console.log(items);
    


    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleSaveChanges = async (id: string) => {
        try {
            
            const response = await fetch(`https://localhost:7285/api/Admin/${routes.deleteRoute}/${id}`, {
                method: 'DELETE',
            });
            console.log("removed");
        
            if (!response.ok) {
                throw new Error("Failed to delete");
            }
            console.log("deleted");
        } catch (err: any) {
            setError(err.message);
            console.log(error);
        } finally {
            setLoading(false);
            setShowModal(false);
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
    console.log(items[currentIndex].image);
    

    return (
        <div className="carousel">
            <button className="carousel__button carousel__button--left" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel__slide">
                <img src={`data:image/png;base64,${items[currentIndex].image}`} alt="carousel item" />
                <button onClick={handleOpenModal} className="btn position-absolute top-0 end-0">
                    <img src={DeleteIcon} width={26} height={24} alt="" />
                </button>
                <Modal
                    show={showModal}
                    onClose={handleCloseModal}
                    onSave={handleSaveChanges}
                    deleteId={items[currentIndex].postId.toString()}
                >
                    <p className="fw-600 fs-5">
                        {deleteText}
                    </p>
                </Modal>
            </div>
            <button className="carousel__button carousel__button--right" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="carousel__dots">
                {items.map((row, index) => (
                    <span
                        key={index}
                        className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
