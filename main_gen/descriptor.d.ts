import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace trial. */
export namespace trial {

    /** ActStatus enum. */
    enum ActStatus {
        ONLINE = 0,
        IDLE = 1,
        INVISIBLE = 2
    }

    /** Properties of a Post. */
    interface IPost {

        /** Post id */
        id?: (string|null);

        /** Post usname */
        usname?: (string|null);

        /** Post content */
        content?: (string|null);

        /** Post timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a Post. */
    class Post implements IPost {

        /**
         * Constructs a new Post.
         * @param [properties] Properties to set
         */
        constructor(properties?: trial.IPost);

        /** Post id. */
        public id: string;

        /** Post usname. */
        public usname: string;

        /** Post content. */
        public content: string;

        /** Post timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new Post instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Post instance
         */
        public static create(properties?: trial.IPost): trial.Post;

        /**
         * Encodes the specified Post message. Does not implicitly {@link trial.Post.verify|verify} messages.
         * @param message Post message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trial.IPost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Post message, length delimited. Does not implicitly {@link trial.Post.verify|verify} messages.
         * @param message Post message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trial.IPost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Post message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trial.Post;

        /**
         * Decodes a Post message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trial.Post;

        /**
         * Verifies a Post message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Post message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Post
         */
        public static fromObject(object: { [k: string]: any }): trial.Post;

        /**
         * Creates a plain object from a Post message. Also converts values to other types if specified.
         * @param message Post
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trial.Post, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Post to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Post
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User usname */
        usname?: (string|null);

        /** User age */
        age?: (number|null);

        /** User about */
        about?: (string|null);

        /** User status */
        status?: (trial.ActStatus|null);

        /** User postlist */
        postlist?: (trial.IPost[]|null);

        /** User followercount */
        followercount?: (number|null);

        /** User email */
        email?: (string|null);

        /** User phone */
        phone?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: trial.IUser);

        /** User id. */
        public id: string;

        /** User usname. */
        public usname: string;

        /** User age. */
        public age: number;

        /** User about. */
        public about: string;

        /** User status. */
        public status: trial.ActStatus;

        /** User postlist. */
        public postlist: trial.IPost[];

        /** User followercount. */
        public followercount: number;

        /** User email. */
        public email: string;

        /** User phone. */
        public phone: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: trial.IUser): trial.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link trial.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trial.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link trial.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trial.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trial.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trial.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): trial.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trial.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Userlist. */
    interface IUserlist {

        /** Userlist users */
        users?: (trial.IUser[]|null);
    }

    /** Represents a Userlist. */
    class Userlist implements IUserlist {

        /**
         * Constructs a new Userlist.
         * @param [properties] Properties to set
         */
        constructor(properties?: trial.IUserlist);

        /** Userlist users. */
        public users: trial.IUser[];

        /**
         * Creates a new Userlist instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Userlist instance
         */
        public static create(properties?: trial.IUserlist): trial.Userlist;

        /**
         * Encodes the specified Userlist message. Does not implicitly {@link trial.Userlist.verify|verify} messages.
         * @param message Userlist message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trial.IUserlist, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Userlist message, length delimited. Does not implicitly {@link trial.Userlist.verify|verify} messages.
         * @param message Userlist message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trial.IUserlist, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Userlist message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Userlist
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trial.Userlist;

        /**
         * Decodes a Userlist message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Userlist
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trial.Userlist;

        /**
         * Verifies a Userlist message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Userlist message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Userlist
         */
        public static fromObject(object: { [k: string]: any }): trial.Userlist;

        /**
         * Creates a plain object from a Userlist message. Also converts values to other types if specified.
         * @param message Userlist
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trial.Userlist, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Userlist to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Userlist
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
