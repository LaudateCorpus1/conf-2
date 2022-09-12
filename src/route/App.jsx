import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* import { Router } from '@reach/router' */
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Cursos from '../pages/Cursos';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import Layout from '../pages/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import ServiceOne from '../pages/products/ServiceOne';
import ServiceTwo from '../pages/products/ServiceTwo';
import ServiceThree from '../pages/products/ServiceThree';
import ServiceFour from '../pages/products/ServiceFour';
import ServiceFive from '../pages/products/ServiceFive';
import ServiceSix from '../pages/products/ServiceSix';
import ServiceSeven from '../pages/products/ServiceSeven';
import ServiceEight from '../pages/products/ServiceEight';
import ServiceNine from '../pages/products/ServiceNine';
import ServiceTen from '../pages/products/ServiceTen';
import CursoONe from '../pages/products/CursoOne';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollTop from '../components/ScrollTop';

function App() {
	const initialState = useInitialState();

	return (
		<BrowserRouter>
			<ScrollTop />
			<AppContext.Provider value={initialState}>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/conoceme" component={About} />
						<Route exact path="/servicios" component={Services} />
						<Route exact path="/cursos" component={Cursos} />
						<Route
							exact
							path="/servicios/tarot-evolutivo"
							component={ServiceOne}
						/>
						<Route
							exact
							path="/servicios/consulta-astral"
							component={ServiceTwo}
						/>
						<Route
							exact
							path="/servicios/psicomatrix"
							component={ServiceThree}
						/>
						<Route
							exact
							path="/productos/floral-healing-pharmacy"
							component={ServiceFour}
						/>
						<Route
							exact
							path="/servicios/terapia-regresiva-a-vidas-pasadas"
							component={ServiceFive}
						/>
						<Route
							exact
							path="/servicios/lectura-y-desbloqueo"
							component={ServiceSix}
						/>
						<Route
							exact
							path="/servicios/astrologia-draconica-karmica"
							component={ServiceSeven}
						/>
						<Route
							exact
							path="/servicios/sanacion-cristales-etericos"
							component={ServiceEight}
						/>
						<Route
							exact
							path="/servicios/quantum-vortex"
							component={ServiceNine}
						/>
						<Route
							exact
							path="/servicios/terapia-respuesta-espiritual"
							component={ServiceTen}
						/>
						<Route
							exact
							path="/cursos/curso-registros-akashicos"
							component={CursoONe}
						/>
						<Route exact path="/contacto" component={Contact} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</AppContext.Provider>
		</BrowserRouter>
	);
}

export default App;
