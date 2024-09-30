import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  close() {
    this.element.dataset.state = 'closed'
    this.element.children[0].dataset.state = 'closed'
    this.element.remove()
  }
}
