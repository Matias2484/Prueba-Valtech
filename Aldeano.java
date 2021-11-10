import Edificio;
import Equipo;

public class Aldeano extends Unidad {
    private int indiceReparacion;
    private int indiceAtaque;

    public Aldeano(){
        super.setVitalidad(100);
        this.indiceReparacion = 20;
        this.indiceAtaque = 5;
    }
    private Boolean esEdificioAliado(Edificio edificio) {
        return this.equipo.equals(edificio.equipo)
    }

    public int getIndiceReparacion() {
        return indiceReparacion;
    }
    public int getIndiceAtaque() {
        return indiceAtaque;
    }

    public void setIndiceReparacion(int indiceReparacion) {
        this.indiceReparacion = indiceReparacion;
    }
    public void setIndiceAtaque(int indiceAtaque) {
        this.indiceAtaque = indiceAtaque;
    }
    public void ejecutarAccion(Edificio edificio) {
        if (this.esEdificioAliado(edificio)) {
            edificio.recibirReparacion(this);
        } else {
            edificio.recibirAtaque(this)
        }
    }
}
