import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { FormularioScreen } from '../components/formulario/FormularioScreen';
import { TiposCitaScreen } from '../components/tiposCita/TiposCitaScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/tiposCita"
          component={TiposCitaScreen}
        />
        <Route
          exact
          path="/formulario"
          component={FormularioScreen}
        />
      </Switch>
    </Router>
  )
}
