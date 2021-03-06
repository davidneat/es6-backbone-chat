import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MessageCollection from './messageCollection';

export default class MessageView extends Backbone.View {
    constructor() {
        super({collection: MessageCollection});
    }

    // ClassName Property
    // -----
    // Backbone calls this function in the super constructor.
    // The returned object will be resolved and set as property.
    className() {
        return 'message-list';
    }

    // tagName Property
    // -----
    // Backbone calls this function in the super constructor.
    // The returned object will be resolved and set as property.
    tagName() {
        return 'ul';
    }

    initialize() {
        this.listenTo(this.collection, 'all', this.render);

        this.template = _.template($('script[name="message"]').html());
    }

    render() {
        this.$el.html(this.template({
            messages: this.collection.toJSON()
        })).animate({
            scrollTop: this.$el[0].scrollHeight
        }, 0);

        return this;
    }
}