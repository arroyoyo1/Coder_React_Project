import { useRef } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useCart } from "../../hooks/useCart";
// Se usa bootstrap para los estilos
export default function Buyer() {
    const { clearCart } = useCart();
    const formRef = useRef(null); // Referencia al formulario
    const success = () => toast.success('La compra se realizo exitosamente', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const buy = (e) => {
        e.preventDefault();
        // Resetea el formulario
        formRef.current.reset();
        clearCart();
        success();
    }


    return (
        <div className="col-12 col-md-6">
            <h3 className='fs-3'>Datos del comprador</h3>
            <form ref={formRef} onSubmit={buy}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Teléfono</label>
                    <input type="text" className="form-control"
                        id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <button type="submit" className="btn btn-warning w-50" >Comprar</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce />
        </div>
    )
}