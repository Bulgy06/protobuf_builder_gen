/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.trial = (function() {

    /**
     * Namespace trial.
     * @exports trial
     * @namespace
     */
    var trial = {};

    /**
     * ActStatus enum.
     * @name trial.ActStatus
     * @enum {number}
     * @property {number} ONLINE=0 ONLINE value
     * @property {number} IDLE=1 IDLE value
     * @property {number} INVISIBLE=2 INVISIBLE value
     */
    trial.ActStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ONLINE"] = 0;
        values[valuesById[1] = "IDLE"] = 1;
        values[valuesById[2] = "INVISIBLE"] = 2;
        return values;
    })();

    trial.Post = (function() {

        /**
         * Properties of a Post.
         * @memberof trial
         * @interface IPost
         * @property {string|null} [id] Post id
         * @property {string|null} [usname] Post usname
         * @property {string|null} [content] Post content
         * @property {number|Long|null} [timestamp] Post timestamp
         */

        /**
         * Constructs a new Post.
         * @memberof trial
         * @classdesc Represents a Post.
         * @implements IPost
         * @constructor
         * @param {trial.IPost=} [properties] Properties to set
         */
        function Post(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Post id.
         * @member {string} id
         * @memberof trial.Post
         * @instance
         */
        Post.prototype.id = "";

        /**
         * Post usname.
         * @member {string} usname
         * @memberof trial.Post
         * @instance
         */
        Post.prototype.usname = "";

        /**
         * Post content.
         * @member {string} content
         * @memberof trial.Post
         * @instance
         */
        Post.prototype.content = "";

        /**
         * Post timestamp.
         * @member {number|Long} timestamp
         * @memberof trial.Post
         * @instance
         */
        Post.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Post instance using the specified properties.
         * @function create
         * @memberof trial.Post
         * @static
         * @param {trial.IPost=} [properties] Properties to set
         * @returns {trial.Post} Post instance
         */
        Post.create = function create(properties) {
            return new Post(properties);
        };

        /**
         * Encodes the specified Post message. Does not implicitly {@link trial.Post.verify|verify} messages.
         * @function encode
         * @memberof trial.Post
         * @static
         * @param {trial.IPost} message Post message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Post.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.usname != null && Object.hasOwnProperty.call(message, "usname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.usname);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified Post message, length delimited. Does not implicitly {@link trial.Post.verify|verify} messages.
         * @function encodeDelimited
         * @memberof trial.Post
         * @static
         * @param {trial.IPost} message Post message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Post.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Post message from the specified reader or buffer.
         * @function decode
         * @memberof trial.Post
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {trial.Post} Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Post.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.trial.Post();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.usname = reader.string();
                        break;
                    }
                case 3: {
                        message.content = reader.string();
                        break;
                    }
                case 4: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Post message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof trial.Post
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {trial.Post} Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Post.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Post message.
         * @function verify
         * @memberof trial.Post
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Post.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.usname != null && message.hasOwnProperty("usname"))
                if (!$util.isString(message.usname))
                    return "usname: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Post message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trial.Post
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trial.Post} Post
         */
        Post.fromObject = function fromObject(object) {
            if (object instanceof $root.trial.Post)
                return object;
            var message = new $root.trial.Post();
            if (object.id != null)
                message.id = String(object.id);
            if (object.usname != null)
                message.usname = String(object.usname);
            if (object.content != null)
                message.content = String(object.content);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Post message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trial.Post
         * @static
         * @param {trial.Post} message Post
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Post.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.usname = "";
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.usname != null && message.hasOwnProperty("usname"))
                object.usname = message.usname;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this Post to JSON.
         * @function toJSON
         * @memberof trial.Post
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Post.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Post
         * @function getTypeUrl
         * @memberof trial.Post
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Post.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/trial.Post";
        };

        return Post;
    })();

    trial.User = (function() {

        /**
         * Properties of a User.
         * @memberof trial
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [usname] User usname
         * @property {number|null} [age] User age
         * @property {string|null} [about] User about
         * @property {trial.ActStatus|null} [status] User status
         * @property {Array.<trial.IPost>|null} [postlist] User postlist
         * @property {number|null} [followercount] User followercount
         * @property {string|null} [email] User email
         * @property {string|null} [phone] User phone
         */

        /**
         * Constructs a new User.
         * @memberof trial
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {trial.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.postlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof trial.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User usname.
         * @member {string} usname
         * @memberof trial.User
         * @instance
         */
        User.prototype.usname = "";

        /**
         * User age.
         * @member {number} age
         * @memberof trial.User
         * @instance
         */
        User.prototype.age = 0;

        /**
         * User about.
         * @member {string} about
         * @memberof trial.User
         * @instance
         */
        User.prototype.about = "";

        /**
         * User status.
         * @member {trial.ActStatus} status
         * @memberof trial.User
         * @instance
         */
        User.prototype.status = 0;

        /**
         * User postlist.
         * @member {Array.<trial.IPost>} postlist
         * @memberof trial.User
         * @instance
         */
        User.prototype.postlist = $util.emptyArray;

        /**
         * User followercount.
         * @member {number} followercount
         * @memberof trial.User
         * @instance
         */
        User.prototype.followercount = 0;

        /**
         * User email.
         * @member {string} email
         * @memberof trial.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * User phone.
         * @member {string} phone
         * @memberof trial.User
         * @instance
         */
        User.prototype.phone = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof trial.User
         * @static
         * @param {trial.IUser=} [properties] Properties to set
         * @returns {trial.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link trial.User.verify|verify} messages.
         * @function encode
         * @memberof trial.User
         * @static
         * @param {trial.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.usname != null && Object.hasOwnProperty.call(message, "usname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.usname);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.age);
            if (message.about != null && Object.hasOwnProperty.call(message, "about"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.about);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            if (message.postlist != null && message.postlist.length)
                for (var i = 0; i < message.postlist.length; ++i)
                    $root.trial.Post.encode(message.postlist[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.followercount != null && Object.hasOwnProperty.call(message, "followercount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.followercount);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link trial.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof trial.User
         * @static
         * @param {trial.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof trial.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {trial.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.trial.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.usname = reader.string();
                        break;
                    }
                case 3: {
                        message.age = reader.int32();
                        break;
                    }
                case 4: {
                        message.about = reader.string();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.postlist && message.postlist.length))
                            message.postlist = [];
                        message.postlist.push($root.trial.Post.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.followercount = reader.int32();
                        break;
                    }
                case 8: {
                        message.email = reader.string();
                        break;
                    }
                case 9: {
                        message.phone = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof trial.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {trial.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof trial.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.usname != null && message.hasOwnProperty("usname"))
                if (!$util.isString(message.usname))
                    return "usname: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.about != null && message.hasOwnProperty("about"))
                if (!$util.isString(message.about))
                    return "about: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.postlist != null && message.hasOwnProperty("postlist")) {
                if (!Array.isArray(message.postlist))
                    return "postlist: array expected";
                for (var i = 0; i < message.postlist.length; ++i) {
                    var error = $root.trial.Post.verify(message.postlist[i]);
                    if (error)
                        return "postlist." + error;
                }
            }
            if (message.followercount != null && message.hasOwnProperty("followercount"))
                if (!$util.isInteger(message.followercount))
                    return "followercount: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trial.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trial.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.trial.User)
                return object;
            var message = new $root.trial.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.usname != null)
                message.usname = String(object.usname);
            if (object.age != null)
                message.age = object.age | 0;
            if (object.about != null)
                message.about = String(object.about);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "ONLINE":
            case 0:
                message.status = 0;
                break;
            case "IDLE":
            case 1:
                message.status = 1;
                break;
            case "INVISIBLE":
            case 2:
                message.status = 2;
                break;
            }
            if (object.postlist) {
                if (!Array.isArray(object.postlist))
                    throw TypeError(".trial.User.postlist: array expected");
                message.postlist = [];
                for (var i = 0; i < object.postlist.length; ++i) {
                    if (typeof object.postlist[i] !== "object")
                        throw TypeError(".trial.User.postlist: object expected");
                    message.postlist[i] = $root.trial.Post.fromObject(object.postlist[i]);
                }
            }
            if (object.followercount != null)
                message.followercount = object.followercount | 0;
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trial.User
         * @static
         * @param {trial.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.postlist = [];
            if (options.defaults) {
                object.id = "";
                object.usname = "";
                object.age = 0;
                object.about = "";
                object.status = options.enums === String ? "ONLINE" : 0;
                object.followercount = 0;
                object.email = "";
                object.phone = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.usname != null && message.hasOwnProperty("usname"))
                object.usname = message.usname;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.about != null && message.hasOwnProperty("about"))
                object.about = message.about;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.trial.ActStatus[message.status] === undefined ? message.status : $root.trial.ActStatus[message.status] : message.status;
            if (message.postlist && message.postlist.length) {
                object.postlist = [];
                for (var j = 0; j < message.postlist.length; ++j)
                    object.postlist[j] = $root.trial.Post.toObject(message.postlist[j], options);
            }
            if (message.followercount != null && message.hasOwnProperty("followercount"))
                object.followercount = message.followercount;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof trial.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof trial.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/trial.User";
        };

        return User;
    })();

    trial.Userlist = (function() {

        /**
         * Properties of a Userlist.
         * @memberof trial
         * @interface IUserlist
         * @property {Array.<trial.IUser>|null} [users] Userlist users
         */

        /**
         * Constructs a new Userlist.
         * @memberof trial
         * @classdesc Represents a Userlist.
         * @implements IUserlist
         * @constructor
         * @param {trial.IUserlist=} [properties] Properties to set
         */
        function Userlist(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Userlist users.
         * @member {Array.<trial.IUser>} users
         * @memberof trial.Userlist
         * @instance
         */
        Userlist.prototype.users = $util.emptyArray;

        /**
         * Creates a new Userlist instance using the specified properties.
         * @function create
         * @memberof trial.Userlist
         * @static
         * @param {trial.IUserlist=} [properties] Properties to set
         * @returns {trial.Userlist} Userlist instance
         */
        Userlist.create = function create(properties) {
            return new Userlist(properties);
        };

        /**
         * Encodes the specified Userlist message. Does not implicitly {@link trial.Userlist.verify|verify} messages.
         * @function encode
         * @memberof trial.Userlist
         * @static
         * @param {trial.IUserlist} message Userlist message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Userlist.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.trial.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Userlist message, length delimited. Does not implicitly {@link trial.Userlist.verify|verify} messages.
         * @function encodeDelimited
         * @memberof trial.Userlist
         * @static
         * @param {trial.IUserlist} message Userlist message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Userlist.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Userlist message from the specified reader or buffer.
         * @function decode
         * @memberof trial.Userlist
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {trial.Userlist} Userlist
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Userlist.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.trial.Userlist();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.trial.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Userlist message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof trial.Userlist
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {trial.Userlist} Userlist
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Userlist.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Userlist message.
         * @function verify
         * @memberof trial.Userlist
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Userlist.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.trial.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Userlist message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trial.Userlist
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trial.Userlist} Userlist
         */
        Userlist.fromObject = function fromObject(object) {
            if (object instanceof $root.trial.Userlist)
                return object;
            var message = new $root.trial.Userlist();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".trial.Userlist.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".trial.Userlist.users: object expected");
                    message.users[i] = $root.trial.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Userlist message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trial.Userlist
         * @static
         * @param {trial.Userlist} message Userlist
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Userlist.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.trial.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this Userlist to JSON.
         * @function toJSON
         * @memberof trial.Userlist
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Userlist.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Userlist
         * @function getTypeUrl
         * @memberof trial.Userlist
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Userlist.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/trial.Userlist";
        };

        return Userlist;
    })();

    return trial;
})();

module.exports = $root;
