class BaseWidget {
  constructor(wrapperElement, initialValue) {
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.wrapper = wrapperElement;

    thisWidget.correctValue = initialValue;
  }
  // Metoda wykonywana przy każdej próbie odczytania wartości właściwości value
  get value(){
    const thisWidget = this;

    return thisWidget.correctValue;
  }
  // Metoda wykonywana przy każdej próbie ustawienia nowej wartości właściwości value
  set value(value) {
    const thisWidget = this;

    const newValue = thisWidget.parseValue(value);

    // TODO: Add validation
    if (thisWidget.correctValue !== newValue && !isNaN(newValue) && thisWidget.isValid(newValue)) {
      thisWidget.correctValue = newValue;
      thisWidget.announce();
    }

    thisWidget.renderValue();
  }

  setValue(value){
    const thisWidget = this;

    thisWidget.value = value;
  }

  // parseValue przekształca wartość, którą chcemy ustawić na odpowiedni typ lub format
  parseValue(value) {
    return parseInt(value);
  }

  isValid(value) {
    return !isNaN(value);
  }
  // Metoda służy do tego, aby bieżąca wartość widgetu została wyświetlona na stronie
  renderValue() {
    const thisWidget = this;

    thisWidget.dom.wrapper.innerHTML = thisWidget.value;
  }

  announce() {
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }
}

export default BaseWidget; 