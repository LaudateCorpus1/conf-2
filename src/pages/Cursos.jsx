/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './styles/services.css';

function Cursos() {
	const { state } = useContext(AppContext);
	const { cursos } = state;
	return (
		<>
			<div className="content_services">
				<div className="content">
					<div className="title-event">
						<p>Mis Cursos</p>
					</div>

					<div className="services_detail">
						{cursos.map((curso, i) => (
							<div className="content-all-swiper">
								<div className="content-swiper">
									<div className="content-imagen">
										<img src={curso.image} alt={curso.name} />
									</div>
									<div className="detalle">
										<p className="detail-title">{curso.name}</p>
										<p className="detail-price">{curso.price}</p>
										<div className="little-description">
											<div className="breve">{curso.breve}</div>
										</div>

										{curso.buttontype === 'solicitar' ? (
											<div className="content-button">
												<div className="content-bo">
													<button className="button-whatsapp" type="button">
														<a
															className="btn-whatsapp"
															href={`https://api.whatsapp.com/send?phone=51990319569&text=${curso.mensaje}`}
															rel="noopener noreferrer"
															target="_blank"
														>
															<i className="fab fa-whatsapp"></i>{' '}
															{curso.buttontype}
														</a>
													</button>
												</div>
												<div className="content-bt">
													<Link
														className="detail-ver"
														to={`/${curso.tipo}/${curso.details}`}
													>
														ver más
													</Link>
												</div>
											</div>
										) : (
											<div className="content-button-disable-service">
												<div className="button-whatsapp-disable">
													{curso.buttontype}
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Cursos;
