// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg_container">
      <div className="faq_list_container">
        <h1 className="Fqas_heading">FQAs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem eachlist={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
