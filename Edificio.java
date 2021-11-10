import Aldeano;
import Equipo;

public class Edificio extends Unidad{

        private int resistencia;

        public Edificio(){
            this.resistencia = 100;
        }

        public int getResistencia() {
            return resistencia;
        }

        public void setResistencia(int resistencia) {
            this.resistencia = resistencia;
        }

        public void recibirReparacion(){
            if(this.resistencia < 100) {
            this.resistencia += aldeano.indiceReparacion;
        } else {this.resistencia = 100}
    }
        public void recibirAtaque(int indiceAtaque) {
            if(this.resistencia > 0) {
                this.resistencia -= indiceAtaque;
            } else {this.resistencia = 0}
        }
}