import { SectionCard } from "./section-card"
import { EndpointCard } from "./endpoint-card"

export function GettingStartedSection() {
  return (
    <section className="mb-12">
      <h1 className="text-3xl font-bold text-white mb-4">API Documentation</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4" id="getting-started">Getting Started</h2>
        <p className="text-[#a3a3a3] mb-6 leading-relaxed">
          Kick off your integration with GoWAPI in minutes. This section guides you through the essentials — from generating your API token to establishing your first WhatsApp session and sending your first message.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard
            title="Getting Started with GoWAPI"
            description="Learn how to quickly set up your GoWAPI account and start sending WhatsApp messages in minutes. This guide covers account creation, token generation, sending your first message, and tracking delivery using our developer-friendly REST API."
            href="/getting-started"
          />
          <SectionCard
            title="Using Our API with Swagger"
            description="Learn how to interact with our API using the official Postman collection."
            href="/using-our-api-with-swagger"
          />
          <SectionCard
            title="How To Receive Messages and Media From GoWAPI"
            description="A developer's guide to receiving and processing real-time message events. This documentation details the flattened JSON payload, unified messageBody field, and handling for both Private and Group chats."
          />
          <SectionCard
            title="Model Context Protocol (MCP) Integration"
            description="Connect GoWAPI to AI agents and automation tools using the Model Context Protocol. This remote MCP server exposes WhatsApp session management, messaging, contacts, and groups as callable tools for Claude Code, OpenCode, n8n, and other MCP-compatible platforms."
          />
          <SectionCard
            title="Using Proxies"
            description="Learn how to configure proxies for your WhatsApp sessions to prevent frequent disconnects and ensure fast, reliable message delivery. SOCKS5 is highly recommended."
          />
        </div>
      </div>
    </section>
  )
}

export function GettingStartedGuideSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-1">Getting Started with GoWAPI</h2>
      <p className="text-sm text-[#a3a3a3] mb-6">Getting Started</p>

      <div className="p-6 border border-[#262626] rounded-xl bg-[#111111]">
        <p className="text-[#a3a3a3] mb-6 leading-relaxed">
          Learn how to quickly set up your GoWAPI account and start sending WhatsApp messages in minutes. This guide covers account creation, token generation, sending your first message, and tracking delivery using our developer-friendly REST API.
        </p>

        <h3 className="text-3xl font-bold text-white mb-6 pb-4 border-b border-[#262626]">
          Getting Started with GoWAPI - WhatsApp Messaging API
        </h3>

        <h4 className="text-2xl font-semibold text-white mb-3">Introduction</h4>
        <p className="text-[#a3a3a3] mb-8 leading-relaxed">
          Welcome to GoWAPI - your reliable WhatsApp API platform. This guide will walk you through the steps to set up and start sending messages using our powerful API. It&apos;s quick, secure, and developer-friendly.
        </p>

        <h4 className="text-2xl font-semibold text-white mb-3">Step 1: Create an Account</h4>
        <ul className="text-[#a3a3a3] mb-8 space-y-2">
          <li>Go to the registration page.</li>
          <li>Fill in your details and verify your email address.</li>
          <li>Once verified, log in to access your dashboard.</li>
        </ul>

        <h4 className="text-2xl font-semibold text-white mb-3">Step 2: Create Your First WhatsApp Session</h4>
        <ul className="text-[#a3a3a3] mb-6 space-y-2">
          <li><strong>Log in to Your Dashboard:</strong> Access your account at https://app.gowapi.com/dashboard.</li>
          <li><strong>Navigate to the Sessions Section:</strong> In the dashboard, go to the Sessions tab.</li>
          <li><strong>Create a New Session:</strong> Click on Create New Session.</li>
          <li><strong>Scan the QR Code:</strong> A QR code will appear. Open WhatsApp on your phone, go to <strong>Settings &gt; Linked Devices</strong>, and scan the QR code to link your WhatsApp account.</li>
          <li><strong>Session Activation:</strong> Once scanned, your session will connect, and you can copy your API key.</li>
        </ul>

        <p className="text-[#a3a3a3] mb-8">
          For a more advanced walkthrough, check out the detailed guide here:{" "}
          <a
            href="https://help.gowapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 underline"
          >
            Creating Your First Session - GoWAPI Help Center
          </a>
        </p>

        <h4 className="text-2xl font-semibold text-white mb-3">Step 3: Send Your First Message</h4>

        <h5 className="text-lg font-semibold text-white mb-2">API Endpoint</h5>
        <pre className="mb-6 p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-x-auto text-sm text-emerald-400">
{`POST https://www.gowapi.com/api/send-message`}
        </pre>

        <h5 className="text-lg font-semibold text-white mb-2">Headers</h5>
        <pre className="mb-6 p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-x-auto text-sm text-emerald-400">
{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
        </pre>

        <h5 className="text-lg font-semibold text-white mb-2">Request Body</h5>
        <pre className="mb-6 p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-x-auto text-sm text-emerald-400">
{`{
  "to": "12123456789",
  "text": "Hello from GoWAPI!"
}`}
        </pre>

        <div className="mb-8 p-3 border border-[#2a2a2a] rounded-lg bg-[#1a1a1a] text-[#d4d4d4] text-sm">
          <strong>Note:</strong> The number you&apos;re messaging must have agreed to receive WhatsApp messages.
        </div>

        <h4 className="text-2xl font-semibold text-white mb-3">Step 4: Track Message Delivery</h4>
        <p className="text-[#a3a3a3] mb-8 leading-relaxed">
          You can track the status of your messages through the session page or set up webhooks for real-time updates.
        </p>

        <h4 className="text-2xl font-semibold text-white mb-3">Need Help?</h4>
        <p className="text-[#a3a3a3] mb-4 leading-relaxed">
          Check out our Help Center or reach out to our support team at{" "}
          <a href="mailto:contact@gowapi.com" className="text-emerald-400 hover:text-emerald-300 underline">
            contact@gowapi.com
          </a>
          .
        </p>

        <a
          href="https://app.gowapi.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors"
        >
          Go to Dashboard
        </a>
      </div>
    </section>
  )
}

export function UsingApiWithSwaggerSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-1">Using Our API with Swagger</h2>
      <p className="text-sm text-[#a3a3a3] mb-6">Getting Started</p>

      <div className="p-6 border border-[#262626] rounded-xl bg-[#111111]">
        <p className="text-[#a3a3a3] mb-6 leading-relaxed">
          Learn how to interact with our API using the official Swagger collection.
        </p>

        <h3 className="text-4xl font-bold text-white mb-6 pb-4 border-b border-[#262626]">
          Swagger Collection for API Integration
        </h3>

        <p className="text-[#a3a3a3] mb-10 leading-relaxed">
          To help you get started quickly, we&apos;ve prepared a Swagger collection that contains all our API endpoints. You can use it to test requests and understand how the API works.
        </p>

        <h4 className="text-4xl font-semibold text-white mb-3">Option 1: Run in Swagger</h4>
        <p className="text-[#a3a3a3] mb-4 leading-relaxed">
          Click the button below to open the collection directly in Swagger:
        </p>
        <a
          href="https://swagger.gowapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors mb-10"
        >
          Run in Swagger →
        </a>

        <h4 className="text-4xl font-semibold text-white mb-3">Option 2: Download Collection</h4>
        <p className="text-[#a3a3a3] mb-4 leading-relaxed">
          If you&apos;d rather import it manually, download the collection below:
        </p>
        <a
          href="https://swagger.gowapi.dev/openapi.json"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors mb-8"
        >
          Download JSON File
        </a>

        <div className="mt-2 p-4 border-l-2 border-emerald-500 rounded-lg bg-emerald-500/10 text-[#d4d4d4] text-sm italic">
          Tip: Make sure you&apos;re logged into your Swagger account for the best experience.
        </div>
      </div>
    </section>
  )
}

export function DeveloperSDKsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="sdks">Developer SDKs</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Platform-specific SDKs to help you seamlessly connect with our API using minimal boilerplate.
      </p>
      <div className="grid gap-4">
        <SectionCard
          title="Official SDKs – Node.js, Python & Laravel"
          description="GoWAPI provides official SDKs to help developers integrate quickly and efficiently using their preferred programming language or framework."
        />
      </div>
    </section>
  )
}

export function AuthenticationSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="authentication">Authentication</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Learn how to authenticate your API requests using the Bearer Token. This token is generated through the session management screen once the session is successfully connected.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <SectionCard
          title="How to Authenticate API Requests Using Bearer Tokens"
          description="This guide explains how to authenticate API requests using a Bearer Token, generated after connecting your WhatsApp session through the Session Management screen."
        />
        <SectionCard
          title="How to Authenticate API Requests Using Personal Access Token"
          description="This guide explains how to authenticate API requests using a Bearer Token, generated from your settings - personal access token page."
        />
      </div>
    </section>
  )
}

export function SessionsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="sessions">Sessions</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Manage WhatsApp device connections through sessions. A session represents a single WhatsApp account linked to the system. Use this section to create, restore, logout, or delete sessions, as well as scan QR codes for authentication.
      </p>
      <div className="grid gap-4">
        <EndpointCard
          method="GET"
          endpoint="/api/whatsapp-sessions"
          title="Get All WhatsApp Sessions"
          description="Retrieves a list of all WhatsApp sessions available to the authenticated user."
          id="get-sessions"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/whatsapp-sessions"
          title="Create WhatsApp Session"
          description="Creates a new WhatsApp session with the provided details. Requires an active subscription and is subject to session limits."
          id="create-session"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/whatsapp-sessions/{whatsappSession}"
          title="Get WhatsApp Session Details"
          description="Retrieves details for a specific WhatsApp session."
          id="get-session-details"
        />
        <EndpointCard
          method="PUT"
          endpoint="/api/whatsapp-sessions/{whatsappSession}"
          title="Update WhatsApp Session"
          description="Updates details for a specific WhatsApp session. If the session is connected, webhook settings will be synced with the WhatsApp API server."
          id="update-session"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/status"
          title="Get WhatsApp Session Status"
          description="Returns the current status of the connected WhatsApp session."
          id="session-status"
        />
        <EndpointCard
          method="DELETE"
          endpoint="/api/whatsapp-sessions/{whatsappSession}"
          title="Delete WhatsApp Session"
          description="Deletes a specific WhatsApp session. If the session is connected, it will attempt to disconnect from the WhatsApp API server first."
          id="delete-session"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/whatsapp-sessions/{whatsappSession}/restart"
          title="Restart WhatsApp Session"
          description="Restarts a specific, currently connected WhatsApp session."
          id="restart-session"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/whatsapp-sessions/{whatsappSession}/connect"
          title="Connect WhatsApp Session"
          description="Initiates the connection process for a WhatsApp session. Requires an active subscription."
          id="connect-session"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/whatsapp-sessions/{whatsappSession}/message-logs"
          title="Get Message Logs"
          description="Retrieves a paginated list of message logs for a specific session."
          id="message-logs"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/whatsapp-sessions/{whatsappSession}/qrcode"
          title="Get WhatsApp Session QR Code"
          description="Retrieves the QR code needed to connect a WhatsApp session with the WhatsApp client. Requires an active subscription."
          id="qr-code"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/whatsapp-sessions/{whatsappSession}/session-logs"
          title="Get Session Logs"
          description="Retrieves a paginated list of session activity logs."
          id="session-logs"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/whatsapp-sessions/{whatsappSession}/disconnect"
          title="Disconnect WhatsApp Session"
          description="Disconnects an active WhatsApp session."
          id="disconnect-session"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/user"
          title="Get Session User Info"
          description="Retrieves information about the WhatsApp user associated with the current API key session."
          id="user-info"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/on-whatsapp/{phone_number}"
          title="Check if a number is on WhatsApp"
          description="Verifies if a given Phone Number is registered on WhatsApp."
          id="check-number"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/whatsapp-sessions/{whatsappSession}/regenerate-key"
          title="Regenerate API Key"
          description="Regenerates the API key for a specific WhatsApp session."
          id="regenerate-key"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-presence-update"
          title="Send Presence Update"
          description="Sends a presence update to a specific JID (e.g., 'typing...' or 'recording...') to indicate user activity. This requires an active session."
          id="presence-update"
        />
      </div>
    </section>
  )
}

export function MessagesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="messages">Messages</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Send and manage WhatsApp messages using active sessions. This category covers various message types including text, image, video, audio, document, location, contact cards, and more.
      </p>
      <div className="grid gap-4">
        <EndpointCard
          method="POST"
          endpoint="/api/decrypt-media"
          title="Decrypt Media File"
          description="This endpoint is used to decrypt media files sent in messages. You need to provide the encrypted media information, including the mediaKey and the url where the encrypted file is hosted."
          id="decrypt-media"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/upload"
          title="Upload Media File"
          description="This documentation details how to use the media upload endpoint, which supports both raw binary and Base64-encoded file uploads."
          id="upload-media"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Text Message"
          description="Sends a plain text message to a recipient."
          id="send-text"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Image Message"
          description="Sends a message with an image attached via a URL."
          id="send-image"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Video Message"
          description="Sends a message with a video attached via a URL."
          id="send-video"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Document Message"
          description="Sends a message with a document attached via a URL."
          id="send-document"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Audio Message"
          description="Sends a message with an audio file attached via a URL."
          id="send-audio"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Sticker Message"
          description="Sends a message with a sticker attached via a URL (supports .webp format)."
          id="send-sticker"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Contact Card"
          description="Sends a message containing a contact card."
          id="send-contact"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/messages/{message}/resend"
          title="Resend Failed Message"
          description="Initiates the resending of a previously failed message from the logs."
          id="resend-message"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Location"
          description="Sends a message containing a location pin."
          id="send-location"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Quoted Message"
          description="Sends a message that quotes or replies to a previous message. This is useful for creating conversational context."
          id="send-quoted"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Poll Message"
          description="Sends a message containing a poll with multi select support."
          id="send-poll"
        />
        <EndpointCard
          method="PUT"
          endpoint="/api/messages/{msgId}"
          title="Edit a Message"
          description="Edits the text content of a previously sent message. Note: This is usually only possible for a short period after the message was sent."
          id="edit-message"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/messages/{msgId}/info"
          title="Get Message Info"
          description="Retrieves detailed information about a specific message, such as its content, sender, receiver, status and timestamps."
          id="message-info"
        />
        <EndpointCard
          method="DELETE"
          endpoint="/api/messages/{msgId}"
          title="Delete a Message"
          description="Deletes a specific message for everyone. Note: This is usually only possible for a short period after the message was sent."
          id="delete-message"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/messages/read"
          title="Mark Message as Read"
          description="Marks a specific received WhatsApp message as read (blue ticks)."
          id="mark-read"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send View Once Message"
          description="Sends an image, video, or audio message that can only be viewed a single time."
          id="view-once"
        />
      </div>
    </section>
  )
}

export function ContactsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="contacts">Contacts</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Endpoints for managing WhatsApp contacts.
      </p>
      <div className="grid gap-4">
        <EndpointCard
          method="GET"
          endpoint="/api/contacts"
          title="Get All Contacts"
          description="Retrieves a list of all contacts synced with the WhatsApp session."
          id="get-contacts"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/contacts/{contactPhoneNumber}"
          title="Get Contact Info"
          description="Retrieves detailed information for a specific contact."
          id="contact-info"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/contacts/{contactPhoneNumber}/picture"
          title="Get Contact Profile Picture"
          description="Retrieves the URL of the profile picture for a specific contact."
          id="contact-picture"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/contacts/{contactPhoneNumber}/block"
          title="Block Contact"
          description="Blocks a specific contact."
          id="block-contact"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/contacts/{contactPhoneNumber}/unblock"
          title="Unblock Contact"
          description="Unblocks a specific contact."
          id="unblock-contact"
        />
        <EndpointCard
          method="PUT"
          endpoint="/api/contacts"
          title="Create or Update Contact"
          description="Creates or updates a contact in the session's address book."
          id="upsert-contact"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/lid-from-pn/{pn}"
          title="Get LID from Phone Number"
          description="Retrieves the Link ID (LID) associated with a real phone number (PN)."
          id="lid-from-pn"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/pn-from-lid/{lid}"
          title="Get Phone Number from LID"
          description="Retrieves the real phone number (PN) associated with a Link ID (LID)."
          id="pn-from-lid"
        />
      </div>
    </section>
  )
}

export function GroupsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="groups">Groups</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Manage WhatsApp groups directly from your connected sessions. This includes creating groups, retrieving group details, adding or removing participants, and sending messages to group chats.
      </p>
      <div className="grid gap-4">
        <EndpointCard
          method="POST"
          endpoint="/api/groups"
          title="Create a New Group"
          description="Creates a new WhatsApp group with a given name and a list of participants."
          id="create-group"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/groups"
          title="Get All Groups"
          description="Retrieves a list of all WhatsApp groups the connected account is a member of."
          id="get-groups"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/groups/{groupJid}/metadata"
          title="Get Group Metadata"
          description="Retrieves metadata for a specific group (e.g., subject, description, creation date, owner)."
          id="group-metadata"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Group Message"
          description="Sends a message to a specific WhatsApp group using its Group ID."
          id="send-group-message"
        />
        <EndpointCard
          method="PUT"
          endpoint="/api/groups/{groupId}/participants/update"
          title="Update Group Participants"
          description="Promote or demote one or more participants in a specific group."
          id="update-participants"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Message with Mentions"
          description="Sends a message to a group that specifically mentions one or more participants."
          id="send-mentions"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/groups/{groupJid}/participants"
          title="Get Group Participants"
          description="Retrieves a list of participants for a specific group. Warning: If the list is empty, it may mean no participants are currently synced or available."
          id="group-participants"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/groups/{groupJid}/participants/add"
          title="Add Group Participants"
          description="Adds participants to a specific group. Requires admin privileges in the group."
          id="add-participants"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/groups/{groupJid}/participants/remove"
          title="Remove Group Participants"
          description="Removes participants from a specific group. Requires admin privileges in the group."
          id="remove-participants"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/groups/{groupJid}/picture"
          title="Get Group Profile Picture"
          description="Retrieves the URL of the profile picture for a specific group."
          id="group-picture"
        />
        <EndpointCard
          method="PUT"
          endpoint="/api/groups/{groupJid}/settings"
          title="Update Group Settings"
          description="Updates settings for a specific group (e.g., subject, description, announce mode, restrict mode). Requires admin privileges."
          id="group-settings"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/groups/{groupJid}/invite-link"
          title="Get Group Invite Link"
          description="This endpoint retrieves the invite link for a specific WhatsApp group."
          id="invite-link"
        />
        <EndpointCard
          method="GET"
          endpoint="/api/groups/invite/{inviteCode}"
          title="Get Group Invite Info"
          description="Retrieves metadata for a group from its invite code."
          id="invite-info"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/groups/invite/accept"
          title="Accept Group Invite"
          description="Accept a group invitation using an invite code."
          id="accept-invite"
        />
        <EndpointCard
          method="POST"
          endpoint="/api/groups/{groupId}/leave"
          title="Leave Group"
          description="Leave a specific group that the user is a member of."
          id="leave-group"
        />
      </div>
    </section>
  )
}

export function ChannelsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="channels">Channels (Communities)</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Manage WhatsApp Communities and their linked groups (also known as announcement channels). This section allows you to create communities, add groups to them, and control communication within a larger organized structure.
      </p>
      <div className="grid gap-4">
        <EndpointCard
          method="POST"
          endpoint="/api/send-message"
          title="Send Channel Message"
          description="Sends a message to a specific WhatsApp channel using its Channel ID."
          id="send-channel"
        />
      </div>
    </section>
  )
}

export function WebhooksSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="webhooks">Webhooks</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Receive real-time updates and events from your WhatsApp sessions through webhooks. This includes incoming messages, message status updates (sent, delivered, read), group events, and session changes.
      </p>
      <div className="grid gap-4">
        <EndpointCard
          method="POST"
          endpoint="/your-webhook-url"
          title="Webhook Setup"
          description="How to set up and verify webhooks to receive real-time events."
          id="webhook-setup"
        />
        <SectionCard
          title="Webhook: Contact Update"
          description="Triggered for other contact updates, such as a contact changing their profile picture or status (if available)."
        />
        <SectionCard
          title="Webhook: Contact Upsert"
          description="Triggered when a new contact is added or an existing contact is updated in your session's contact list."
        />
        <SectionCard
          title="Webhook: Group Participants Update"
          description="Triggered when participants are added, removed, promoted, or demoted in a group."
        />
        <SectionCard
          title="Webhook: Group Update"
          description="Triggered for other group-related updates, such as changes to group settings like announce mode or restrict mode by an admin."
        />
        <SectionCard
          title="Webhook: Chat Update"
          description="Triggered when properties of a chat are updated (e.g., unread count, mute status)."
        />
        <SectionCard
          title="Webhook: Message Sent"
          description="Event triggered when a message is successfully sent from your session."
        />
        <SectionCard
          title="Webhook: Group Upsert"
          description="Triggered when your session joins a new group or when metadata of an existing group (subject, description, etc.) is updated."
        />
        <SectionCard
          title="Webhook: Session Status"
          description="Event triggered when the connection status of your WhatsApp session changes."
        />
        <SectionCard
          title="Webhook: Chat Delete"
          description="Triggered when a chat is deleted."
        />
        <SectionCard
          title="Webhook: Chat Upsert"
          description="Triggered when a chat is created or updated (e.g., new message, read status change)."
        />
        <SectionCard
          title="Webhook: QR Code Updated"
          description="Event triggered when a new QR code is generated for linking your session."
        />
        <SectionCard
          title="Webhook: Message Received"
          description="Event is triggered for incoming messages, to listen for both incoming and outgoing, please refer to messages.upsert."
        />
        <SectionCard
          title="Webhook: Message Upsert"
          description="Event is triggered for all messages in your session, both incoming and outgoing. To listen only for incoming events, please refer to messages.received."
        />
        <SectionCard
          title="Webhook: Group Message Received"
          description="Event is triggered when a message is received in any group the session is a part of."
        />
        <SectionCard
          title="Webhook: Message Status Update"
          description="Event triggered when a message's status is updated (e.g., delivered, read)."
        />
        <SectionCard
          title="Webhook: Message Deleted"
          description="Event triggered when a message is deleted."
        />
        <SectionCard
          title="Webhook: Newsletter Message Received"
          description="Event is triggered when a message is received in a newsletter (channel) the session is subscribed to."
        />
        <SectionCard
          title="Webhook: Message Receipt Update"
          description="Event triggered specifically for message receipt status changes."
        />
        <SectionCard
          title="Webhook: Personal Message Received"
          description="Event is triggered when a message is received in a personal (one-to-one) chat."
        />
        <SectionCard
          title="Webhook: Message Reaction"
          description="Event triggered when someone reacts to a message."
        />
        <SectionCard
          title="Webhook: Call Received"
          description="Event is triggered for an incoming voice or video call."
        />
        <SectionCard
          title="Webhook: Poll Results"
          description="This webhook is triggered when there is an update to a poll, such as when a user casts a vote."
        />
      </div>
    </section>
  )
}

export function ResponsesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="responses">Responses & Errors</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Understand the structure of API responses and how to handle errors effectively. This section outlines standard success responses, common error formats, status codes, and tips for debugging failed requests.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <SectionCard
          title="Response Headers"
          description="Information about standard headers included in API responses, particularly rate limiting."
        />
        <SectionCard
          title="Error Responses"
          description="Common error responses returned by the API."
        />
      </div>
    </section>
  )
}

export function RateLimitsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4" id="rate-limits">Rate Limits</h2>
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">
        Learn how API rate limiting works to ensure fair usage and system stability. This section explains the allowed number of requests per time window, how to identify throttling, and how to handle rate limit responses.
      </p>
      <div className="grid gap-4">
        <SectionCard
          title="Understanding Rate Limits"
          description="Details on the rate limits applied to API requests based on subscription plans."
        />
      </div>
    </section>
  )
}
